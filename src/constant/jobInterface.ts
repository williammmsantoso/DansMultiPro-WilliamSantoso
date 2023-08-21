export interface JobParamsType{
    description?: string,
    location?: string, 
    full_time?: boolean
}

export interface JobListType {
    company: string, 
    company_logo: string,
    company_url: string,
    created_at: string,
    description: string,
    how_to_apply: string,
    id: string,
    location: string,
    title: string,
    type: string,
    url: string
}