export type IBaseSkeleton<S, T> = {
    contentTypeId: S
    fields: T,
    sys: {
        id: string;
    }
}