export default {
    name: "blockContent",
    title: "Block Content",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [{ title: 'bullet', value: 'bullet' }],

            // Marks let you mark up inline text in the block editor.
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' }
                ]
            },

            // annotations: [
            //     {
            //       title: 'URL',
            //       name: 'link',
            //       type: 'object',
            //       fields: [
            //         {
            //           title: 'URL',
            //           name: 'href',
            //           type: 'url',
            //         },
            //       ],
            //     },
            //   ],
        },
        {
            type: 'image',
            options: { hotspot: true }
        }
    ]

}