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
                case "home_page":
                    return typeof(HomePage);
                case "navigation":
                    return typeof(Navigation);
                case "resource_card":
                    return typeof(ResourceCard);
                default:
                    return null;
            }
        }
    }
}