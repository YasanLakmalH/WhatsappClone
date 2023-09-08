export default {
    id:'1',
    users: [
        {
          id: "u1",
          name: "Lucas",
          imageUri: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "u2",
          name: "Jhon",
          imageUri: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
    messages:[{
        id:"m1",
        content:"Hello!",
        createdAt:"2023-09-07T07:58:10.436Z",
        user:{
            id: "u1",
            name: "Lucas",        
        }
    },
    {
        id:"m2",
        content:"Are u ok? ",
        createdAt:"2023-09-07T07:58:10.436Z",
        user:{
            id: "u2",
            name: "Jhon",        
        }
    },
    {
        id:"m3",
        content:"I dont know",
        createdAt:"2023-09-07T07:58:10.436Z",
        user:{
            id: "u1",
            name: "Lucas",        
        }
    },
    {
        id:"m4",
        content:"May be",
        createdAt:"2023-09-07T07:58:10.436Z",
        user:{
            id: "u2",
            name: "Jhon",        
        }
    }
]
}