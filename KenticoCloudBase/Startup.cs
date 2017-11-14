using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using KenticoCloud.Delivery;
using KenticoCloudBase.Services;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using KenticoCloudBase.Models;
using KenticoCloudBase.Resolvers;
using KenticoCloudBase.Configurations;

namespace KenticoCloudBase
{
    public class Startup
    {
        // This constant must match <UserSecretsId> value in CloudBoilerplateNet.csproj 
        public const string USER_SECRETS_ID = "CloudBoilerplateNet";

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Adds services required for using options.
            services.AddOptions();

            // IP Security settings
            services.Configure<IpSecuritySettings>(Configuration.GetSection("IpSecuritySettings"));

            // Register the IConfiguration instance which ProjectOptions binds against.
            services.Configure<ProjectOptions>(Configuration);

            // Add framework services.
            services.AddMvc();

            //TODO: Add Service Factory
            services.AddSingleton<IDeliveryClient>(c => new CachedDeliveryClient(c.GetRequiredService<IOptions<ProjectOptions>>(), c.GetRequiredService<IMemoryCache>())
            {
                CodeFirstModelProvider = { TypeProvider = new CustomTypeProvider() },
                ContentLinkUrlResolver = new CustomContentLinkUrlResolver()
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    HotModuleReplacementEndpoint = "/dist/__webpack_hmr"
                });
            }
            else
            {               
                // Handle unhandled exceptions as Internal Server Errors (500)
                app.UseExceptionHandler("/Error/500");

                // Display friendly error pages for any 
                // non-success case (status code is >= 400 and < 600)
                app.UseStatusCodePagesWithReExecute("/Error/{0}");

                // IP Validation Middleware
                // app.UseMiddleware<IpRestrictionMiddleware>();
            }

            app.UseStaticFiles();

            /* URL Re-Writing Disabled By Default
            // Add IIS URL Rewrite list
            // See https://docs.microsoft.com/en-us/aspnet/core/fundamentals/url-rewriting
            using (StreamReader iisUrlRewriteStreamReader = File.OpenText("IISUrlRewrite.xml"))
            {
                var options = new RewriteOptions()
                    .AddIISUrlRewrite(iisUrlRewriteStreamReader);

                app.UseRewriter(options);
            }*/

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "sitemap",
                    defaults: new { controller = "Sitemap", action = "Index" },
                    template: "sitemap.xml");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
