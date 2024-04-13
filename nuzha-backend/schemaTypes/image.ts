export default {
    name: 'mainImage',
    title: 'Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'alt',
            title: 'Alternative text',
            type:'string',
        }


    ]
}