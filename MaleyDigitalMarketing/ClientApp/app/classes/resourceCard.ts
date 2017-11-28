import { Asset } from "./asset";
import { ContentItemSystemAttribute } from "./contentItemSystemAttribute";

export class ResourceCard {

    resourceImage: Asset;
    resourceName: string;
    resourceShortDescription: string;
    resourceLink: string;
    system: ContentItemSystemAttribute;
}
