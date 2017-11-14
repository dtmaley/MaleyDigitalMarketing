using System;
using KenticoCloud.Delivery;

namespace KenticoCloudBase.Models
{
    public class CustomTypeProvider : ICodeFirstTypeProvider
    {
        public Type GetType(string contentType)
        {
            switch (contentType)
            {
                case "associate_profile":
                    return typeof(AssociateProfile);
                case "associate_profile_experience":
                    return typeof(AssociateProfileExperience);
                default:
                    return null;
            }
        }
    }
}
