import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'


const textsDirectory = path.join(process.cwd(), 'texts');

export async function getTextData(fileName) {
    // Get file names under /texts
    //const fileNames = fs.readdirSync(textsDirectory);
    //const allTextData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
    const fullPath = path.join(textsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

        // Combine the data with the id
    return {
            id,
            contentHtml,
            ...matterResult.data
        }
    }