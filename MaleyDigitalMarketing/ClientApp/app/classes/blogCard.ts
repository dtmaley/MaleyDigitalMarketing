import { Asset } from "./asset";
import { ContentItemSystemAttribute } from "./contentItemSystemAttribute";

export class BlogCard {

    cardImage: Asset;
    blogName: string;
    blogShortDescription: string;
    blogLandingLink: string;
    system: ContentItemSystemAttribute;
}
