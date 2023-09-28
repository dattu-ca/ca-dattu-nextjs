export type ISkeleton<S, T> = {
    contentTypeId: S
    fields: T,
    sys: {
        id: string;
    }
}