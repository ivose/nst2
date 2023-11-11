import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const author = await prisma.author.create({
        data: {
            name: "My first post..",
        }
    })
    console.log(author)
    const post = await prisma.post.create({
        data: {
            title: "My first post..",
            body: "My first post body",
            authorId: author.id
            /*author: {
                connect: {
                    id: author.id
                }
            }*/
        }
    })
    console.log(post)
    const posts = await prisma.post.findMany({
        include: {
            Author: true
        }
    })
    console.log(posts)
}

main()