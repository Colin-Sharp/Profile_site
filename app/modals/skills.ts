export interface SkillPropsInterface {
    imageSrc: string;
    text: string;
    skillLevel: SkillLevelEnum;
}

export enum SkillLevelEnum {
    FOUNDATION = 'foundation',
    INTERMEDIATE = 'intermediate',
    PRO = 'pro',
    HIGHTLY_SKILLED = 'highly-skilled'
}