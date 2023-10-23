interface IProps {
    params: {
        slug: string | string []
    }
}

const Page = async (props: IProps) => {


    return <div>
        <h1>POST PAGE</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
}
export default Page;