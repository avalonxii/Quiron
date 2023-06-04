export type TChangeIt = {
    name: { name: string, error: string },
    userName: { userName: string, error: string },
    email: { email: string, error: string },
    aboutme: { aboutme: string, error: string },
    passw: { passw: string, error: string },
    passw2: { passw2: string, error: string }
}

export type TValidateForm = {
    changeIt: TChangeIt,
    itsOk: boolean
}


export type TUser = {
    _id: string,
    name: string,
    userName: string,
    email: string,
    password: string,
    aboutme: string,
    avatarPhotoPath: string,
    challenging: [string], // no mor than 2
    favorites: [string], //id challanges
    role: string, // normal or admin
    points: number
}

export type TChallenge = {
    _id: string,
    title: string,
    description: string,
    imgsPath: [string],
    diffuculty: number,
    type: string,
    tags: [string]
};

export type TSolution = {
    _id: string,
    IdChallenge: string,
    IdUser: string,
    title: string,
    description: string,
    imgsPath: [string],
    tags: [string]
    hashtags: string,
    difficulty: number,
    github: string,
    likes: [string]
};