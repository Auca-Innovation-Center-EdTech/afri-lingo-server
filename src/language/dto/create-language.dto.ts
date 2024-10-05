export class CreateLanguageDto {
    name: string;
    code: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    description?: string;
    isActive: boolean;
}