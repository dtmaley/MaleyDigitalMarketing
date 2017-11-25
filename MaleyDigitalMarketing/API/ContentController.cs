using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KenticoCloud.Delivery;
using System;
using MDM.Models;

namespace MDM.API
{
    [Route("api/[controller]")]
    public class ContentController : BaseController
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(typeof(ContentController));

        public ContentController(IDeliveryClient deliveryClient) : base(deliveryClient)
        {

        }

        /// <summary>
        /// Get the Homepage Content Item for Displaying Items on Home Page
        /// </summary>
        /// <param name="codeName"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public async Task<IActionResult> GetHomePageContent(string codename)
        {
            try
            {
                DeliveryItemResponse<HomePage> result = await DeliveryClient.GetItemAsync<HomePage>(codename);

                return Ok(result.Item);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                throw;
            }
        }
    }
}
