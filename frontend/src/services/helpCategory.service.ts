import api from '@/lib/axios';
import type { ICategory } from '@/@types/ICategory';

export const fetchHelpCategories = async (): Promise<ICategory> => {
    const accessToken = localStorage.getItem('accessToken');

    const { data } = await api.get(`/categories/help`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return data;
};

export const createHelpCategory = async (category: { categoryName: string; description?: string; chapterId: number; typeId: number }) => {
    const { data } = await api.post('/categories/help', category, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
    return data;
};

export const updateHelpCategory = async (id: string, data: { categoryName: string; description?: string }) => {
    const response = await api.put(`/categories/help/${id}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
    return response.data;
};

export const deleteHelpCategory = async (id: string) => {
    const response = await api.delete(`/categories/help/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
    return response.data;
};
