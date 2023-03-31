POST_SCHEMA = {"type":"object",
            "properties":{
            "author":{"type":"number"},
            "id":{"type":"number"},
            "content":{"type":"string"},
            "publication_datetime":{"type":"string"},
            "title":{"type":"string"}
    
            },
            "required": ["id","content","publication_datetime","title","author"]
}
    
    

POST_CREATE = {"type":"object",
            "properties":{
            "author":{"type":"number"},
            "id":{"type":"number"},
            "content":{"type":"string"},
            "publication_datetime":{"type":"string"},
            "title":{"type":"string"}
    
            },
            "required": ["id","content","publication_datetime","title","author"]
}
    
    

