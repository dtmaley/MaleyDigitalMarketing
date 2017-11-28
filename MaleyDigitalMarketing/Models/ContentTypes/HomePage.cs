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
    public partial class HomePage
    {
        public const string Codename = "home_page";
        public const string HeroImageCodename = "hero_image";
        public const string HeroSkill1Codename = "hero_skill_1";
        public const string HeroSkill2Codename = "hero_skill_2";
        public const string HeroSkill3Codename = "hero_skill_3";
        public const string ResourceSectionHeaderTextCodename = "resource_section_header_text";
        public const string ResourceCardsCodename = "resource_cards";

        public IEnumerable<Asset> HeroImage { get; set; }
        public string HeroSkill1 { get; set; }
        public string HeroSkill2 { get; set; }
        public string HeroSkill3 { get; set; }
        public string ResourceSectionHeaderText { get; set; }
        public IEnumerable<object> ResourceCards { get; set; }
        public ContentItemSystemAttributes System { get; set; }
    }
}