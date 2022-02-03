// 1) создать интерфейс на основе этого объекта:

export interface IObject {
    "mission_name": string;
    "launch_date_local": string;
    "launch_site": {
        "site_name_long": string;
    },
    "links": {
        "article_link": null | string;
        "video_link": string;
    },
    "rocket": {
        "rocket_name": string;
        "first_stage": {
            "cores": [
                {
                    "flight": number;
                    "core": {
                        "reuse_count": number;
                        "status": string;
                    }
                }
            ]
        },
        "second_stage": {
            "payloads": [
                {
                    "payload_type": string;
                    "payload_mass_kg": number;
                    "payload_mass_lbs": number;
                }
            ]
        }
    }
}

// ---------------------------------------------------------------------------—————————
// 2) протипизировать функции:


interface IUser {
    name?: string;
    age?: number;
    gender?: string;
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser:IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)