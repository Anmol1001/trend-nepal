export type ImageType = {
    id:number,
    source : string,
    alt: string,
    title: string,
    description: string,
    button_title: string,
    flex?: boolean,
    color?: boolean
}

export type ImgType = {
    id: number,
    source: string,
    alt: string,
    name: string
}

export type footerLinks = {
    name : string,
    url: string
}

export type Footer = {
    head: string,
    link: footerLinks[]
}

export type LoginInputs = {
  username: string
  password: string
  remember_me: boolean
}

export type SignUpInputs = {
    name: string
    email: string
    password: string
    accept_terms: boolean
  }