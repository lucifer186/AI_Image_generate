import FileSaver from  'file-saver'


import { surpriseMePrompts } from "../constant";

export const getRandomPrompt =(prompt)=>{
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const surprisePrompt = surpriseMePrompts[randomIndex];

    if(surprisePrompt === prompt) return getRandomPrompt(prompt);

    return surprisePrompt;

}

export async function downloadImage(_id, photo)
{
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
}