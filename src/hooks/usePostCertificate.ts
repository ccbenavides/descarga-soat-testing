import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { postCertificate } from "../services/certificate";
import { certificateData } from "../types/certificateData";

export const usePostCertificate = () => {
    const options: UseMutationOptions<Blob, Error, certificateData> = {
        mutationFn: postCertificate,
        onError: () => {
            console.log('Error!');
        },
    };
    return useMutation(options);
};