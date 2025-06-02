import api from "@/lib/axios";

export const fetchCategoryChapters = async () => {
  const res = await api.get('/categories/chapters', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};

export const fetchCategoryTypes = async () => {
  const res = await api.get('/categories/types', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};
