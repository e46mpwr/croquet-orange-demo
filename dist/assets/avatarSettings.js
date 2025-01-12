export let arr = 
[
    {
        "png": "./assets/avatar-images/AvaPic_Parent001.png",
        "key": "parent1",
        "skins": {
            "default": "./assets/avatars/SK_Parent001_home.glb",
            "home": "./assets/avatars/SK_Parent001_home.glb",
            "office": "./assets/avatars/SK_Parent001_office.glb",
            "park": "./assets/avatars/SK_Parent001_garden.glb"
        },
        "type": "ReadyPlayerMePerson",
        "description": "Parent 1, start in office space",
        "restrictions": [],
        "params": {
            "world": "office"
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/AvaPic_Parent002.png",
        "key": "parent2",
        "type": "ReadyPlayerMePerson",
        "description": "Parent 2, start in home space",
        "restrictions": ["location.office"],
        "params": {
            "world": "home"
        },
        "skins": {
            "default": "./assets/avatars/SK_Parent002_home.glb",
            "home": "./assets/avatars/SK_Parent002_home.glb",
            "park": "./assets/avatars/SK_Parent002_garden.glb"
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/AvaPic_Children001.png",
        "key": "child",
        "type": "ReadyPlayerMePerson",
        "description": "Child, start in home space",
        "restrictions": ["location.office", "action.tv"],
        "params": {
            "world": "home"
        },
        "skins": {
            "default": "./assets/avatars/SK_Children001_home.glb",
            "home": "./assets/avatars/SK_Children001_home.glb",
            "park": "./assets/avatars/SK_Children001_garden.glb"
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/AvaPic_Colleague001.png",
        "key": "worker",
        "type": "ReadyPlayerMePerson",
        "description": "Worker, start in office space",
        "restrictions": ["location.home"],
        "params": {
            "world": "office"
        },
        "skins": {
            "default": "./assets/avatars/SK_Colleague001_office.glb",
            "office": "./assets/avatars/SK_Colleague001_office.glb",
            "park": "./assets/avatars/SK_Colleague001_garden.glb"
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/AvaPic_Friend001.png",
        "key": "friend1",
        "type": "ReadyPlayerMePerson",
        "description": "Friend 1, start in the park space",
        "restrictions": ["location.home", "location.office"],
        "params": {
            "world": "park"
        },
        "skins": {
            "default": "./assets/avatars/SK_Friend001_home.glb",
            "home": "./assets/avatars/SK_Friend001_home.glb",
            "office": "./assets/avatars/SK_Friend001_office.glb",
            "park": "./assets/avatars/SK_Friend001_garden.glb"
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/AvaPic_Friend002.png",
        "key": "friend2",
        "type": "ReadyPlayerMePerson",
        "description": "Friend 2, start in the park space",
        "restrictions": ["location.home", "location.office"],
        "params": {
            "world": "park"
        },
        "skins": {
            "default": "./assets/avatars/SK_Friend002_house.glb",
            "home": "./assets/avatars/SK_Friend002_house.glb",
            "office": "./assets/avatars/SK_Friend002_office.glb",
            "park": "./assets/avatars/SK_Friend002_garden.glb"
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/Bertrand.png",
        "key": "Bertrand",
        "type": "ReadyPlayerMePerson",
        "description": "Bertrand office avatar",
        "restrictions": ["location.home", "location.park"],
        "params": {
            "world": "office"
        },
        "skins": {
            "default": "./assets/avatars/Bertrand office avatar.glb",
            "home": "",
            "office": "./assets/avatars/Bertrand office avatar.glb",
            "park": ""
        },
        "metaMuskIDs": []
    },
    {
        "png": "./assets/avatar-images/Christos.png",
        "key": "Christos",
        "type": "ReadyPlayerMePerson",
        "description": "Christos office avatar",
        "restrictions": [],
        "params": {
            "world": "office"
        },
        "skins": {
            "default": "./assets/avatars/Christos office avatar.glb",
            "home": "",
            "office": "./assets/avatars/Christos office avatar.glb",
            "park": ""
        },
        "metaMuskIDs": ["0x3F56b754B035417514C7b067Ae1020Cb07e81782", "0x5755BC224544eD2E4eC44C39a7Af9De731994004"]
    }
]   
