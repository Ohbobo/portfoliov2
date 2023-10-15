export class ProjectDto {
    title: string;
    description: string;
    tags: TagsDto[];
}

export class TagsDto {
    id: string;
    name: string;
}