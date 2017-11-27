import { Asset } from "./asset";
import { ContentItemSystemAttribute } from "./contentItemSystemAttribute";
import { BlogCard } from "./blogCard";

export class HomePage {

    heroImage: Asset;
    heroSkill1: string;
    heroSkill2: string;
    heroSkill3: string;
    blogSectionHeaderText: string;
    blogCards: BlogCard[];
    system: ContentItemSystemAttribute;
}
