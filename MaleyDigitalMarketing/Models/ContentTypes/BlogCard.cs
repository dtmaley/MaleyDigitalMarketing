// This code was generated by a cloud-generators-net tool 
// (see https://github.com/Kentico/cloud-generators-net).
// 
// Changes to this file may cause incorrect behavior and will be lost if the code is regenerated. 
// For further modifications of the class, create a separate file with the partial class.

using System;
using System.Collections.Generic;
using KenticoCloud.Delivery;

namespace MDM.Models
{
    public partial class BlogCard
    {
        public const string Codename = "blog_card";
        public const string CardImageCodename = "card_image";
        public const string BlogNameCodename = "blog_name";
        public const string BlogShortDescriptionCodename = "blog_short_description";
        public const string BlogLandingLinkCodename = "blog_landing_link";

        public IEnumerable<Asset> CardImage { get; set; }
        public string BlogName { get; set; }
        public string BlogShortDescription { get; set; }
        public string BlogLandingLink { get; set; }
        public ContentItemSystemAttributes System { get; set; }
    }
}