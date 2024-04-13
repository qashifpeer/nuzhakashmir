export default{
    name: 'post',
    type: 'document',
    title: 'Post',
    fields : [
        {
            name: 'title',
            title: 'Title',
            type:'string',
        },
        {
            name : "slug",
            title : "Slug",
            type : "slug",
            options : {
                source : "title",
                maxLength : 96,
            }
        },
        {
            name : "author",
            title : "Author",
            type : "reference",
            to: {type : "author" }
        },
        {
            name : "featureImage",
            title : "Feature Image",
            type : "image",
            options : {
                hotspot : true,
            }
        },
        {
            name : "categories",
            title : "Categories",
            type : "array",
            of : [{type : 'reference', to: {type: 'category'}}]
        },
        {
            name: "publishedAt",
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }
    ],
    // preview: {
    //         select :{
    //             title : 'title',
    //             author : 'author.name',
    //             media : 'featureImage',
    //             publishedAt : 'publishedAt(formatString: "MMMM Do, YYYY")',
    //         },
           
    // }
}