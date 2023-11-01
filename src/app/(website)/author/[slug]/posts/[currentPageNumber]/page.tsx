interface IProps {
    params: {
        slug: string,
        currentPageNumber: number;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    return <div>
        <pre>{JSON.stringify({params}, null, 2)}</pre>
    </div>
}
export default Page;