"use client"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ProblemStatementProps = {
    description: string;
};

export default function ProblemStatement({ description }: ProblemStatementProps) {
    return (
            <div className='bg-gray-400 rounded-sm my-2 min-h-screen'>
                <div className='px-4 text-lg font-bold text-violet-600 border-b border-black'>Description</div>
                <div className='p-3'>
                    <div className='prose prose-sm  text-black'>
                        <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
                    </div>
                </div>
            </div> 
    );
}
