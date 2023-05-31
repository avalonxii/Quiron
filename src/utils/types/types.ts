
export type ChangeIt = {
    name: { name: string, error: string },
    userName: { userName: string, error: string },
    email: { email: string, error: string },
    passw: { passw: string, error: string },
    passw2: { passw2: string, error: string }
}

export type ValidateForm = {
    changeIt: ChangeIt,
    itsOk: boolean
}

export type User = {
    name: string,
    userName: string,
    email: string,
    password: string,
    aboutme: string,
    avatarPhotoPath: string,
    followers: [string], //id users
    following: [string], //idusers
    challenging: [string], // no mor than 2
    favorites: [string], //id challanges
    type: string // normal or admin
}

export type UserLocals = {
	id: number,
	name: string,
	userName: string,
	email: string,
	role: string,
}

export type challenge= {
    _id: string,
    title: string,
    description: string,
    imgsPath: [string],
    diffuculty: number,
    type: string,
    tags: [string]
};