using System;
using KenticoCloud.Delivery;

namespace MDM.Models
{
    public class CustomTypeProvider : ICodeFirstTypeProvider
    {
        public Type GetType(string contentType)
        {
            switch (contentType)
            {
                case "blog_card":
                    return typeof(BlogCard);
                case "home_page":
                    return typeof(HomePage);
                case "navigation":
                    return typeof(Navigation);
                default:
                    return null;
            }
        }
    }
}