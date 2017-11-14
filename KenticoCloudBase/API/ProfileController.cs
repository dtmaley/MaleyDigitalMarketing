using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KenticoCloud.Delivery;
using KenticoCloudBase.Models;
using System;

namespace KenticoCloudBase.Controllers
{
    [Route("api/[controller]")]
    public class ProfileController : BaseController
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(typeof(ProfileController));

        public ProfileController(IDeliveryClient deliveryClient) : base(deliveryClient)
        {

        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetList()
        {
            try
            {
                DeliveryItemListingResponse<AssociateProfile> result = await DeliveryClient.GetItemsAsync<AssociateProfile>(
                     new EqualsFilter("system.type", "associate_profile")
                 );

                return Ok(result.Items);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                throw;
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get(string codeName)
        {
            try
            {
                DeliveryItemResponse<AssociateProfile> result = await DeliveryClient.GetItemAsync<AssociateProfile>(codeName);

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
