export class ProjectDto {
    title: string;
    description: string;
    tags: TagsDto[];
}

export class TagsDto {
    name: string;
}