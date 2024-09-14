"use client"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type EditorialProps = {
    editorialDescription: string;
};

export default function EditorialStatment({ editorialDescription }: EditorialProps) {

    return (
            <div className='bg-zinc-600 rounded-sm my-2 min-h-screen'>
                <div className='px-4 text-lg font-bold text-violet-600 border-b border-black'>Editorial</div>
                <div className='p-3'>
                    <div className='prose prose-sm  text-black'>
                        <Markdown remarkPlugins={[remarkGfm]}>{editorialDescription}</Markdown>
                    </div>
                </div>
            </div> 
    );
}
