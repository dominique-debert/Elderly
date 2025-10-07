import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchProgramCategories = async (): Promise<ICategory> => {
    const accessToken = localStorage.getItem('accessToken');

    const { data } = await api.get(`/categories/programs`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return data;
};

export const createProgramCategory = async (category: { categoryName: string; description?: string; chapterId: number; typeId: number }) => {
    const { data } = await api.post('/categories/programs', category, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
    return data;
};

export const updateProgramCategory = async (id: string, data: { categoryName: string; description?: string }) => {
    const response = await api.put(`/categories/programs/${id}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    });
    return response.data;
};

export const deleteProgramCategory = async (id: string) => {
    const response = await api.delete(`/categories/programs/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
    return response.data;
};
