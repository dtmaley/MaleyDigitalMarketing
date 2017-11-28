import { Asset } from "./asset";
import { ContentItemSystemAttribute } from "./contentItemSystemAttribute";
import { ResourceCard } from "./resourceCard";

export class HomePage {

    heroImage: Asset;
    heroSkill1: string;
    heroSkill2: string;
    heroSkill3: string;
    blogSectionHeaderText: string;
    blogCards: ResourceCard[];
    system: ContentItemSystemAttribute;
}
