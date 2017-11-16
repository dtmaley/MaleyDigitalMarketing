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
                /*TODO Remove
                case "associate_profile":
                    return typeof(AssociateProfile);
                case "associate_profile_experience":
                    return typeof(AssociateProfileExperience);
                default:
                    return null;
                 */
            }

            return null;
        }
    }
}
