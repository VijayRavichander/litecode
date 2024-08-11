import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type ProblemStatementProps = {
    description: string;
  };


export default function ProblemStatement({description} : ProblemStatementProps) {

    return (
        <div className=''>
            <div className='px-4 text-lg font-bold text-violet-600 border-b mb-2'>Description</div>
            <div className='prose prose-sm pl-4 text-black'>
                <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
            </div>
        </div>

    )
}
