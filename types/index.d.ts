

declare type SearcParamProps = {
    params: { [key: string]: string}
    searchParams: { [key: string]: string | string[] | undefined }
};

//==========================

declare type SignupParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
    password: string;
};