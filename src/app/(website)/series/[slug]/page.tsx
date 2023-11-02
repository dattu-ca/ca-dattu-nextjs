interface IProps {
    params: {
        slug: string
    }
}

const Page = async (props: IProps) => {


    return <pre>{JSON.stringify(props, null, 2)}</pre>
}
export default Page;