import React, { createContext, useContext, useState, useEffect } from 'react';
import { productsAPI, coursesAPI } from '../services/api';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  size: string;
  medium: string;
  availability: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface Course {
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  color: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ProductContextType {
  products: Product[];
  courses: Course[];
  loading: boolean;
  error: string | null;
  addProduct: (product: Omit<Product, '_id'>) => Promise<void>;
  updateProduct: (id: string, product: Omit<Product, '_id'>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  addCourse: (course: Omit<Course, '_id'>) => Promise<void>;
  updateCourse: (id: string, course: Omit<Course, '_id'>) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
  fetchProducts: () => Promise<void>;
  fetchCourses: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (error: any) {
      console.error('Error fetching products:', error);
      setError(error.response?.data?.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  // Fetch courses from API
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await coursesAPI.getAll();
      setCourses(response.data);
    } catch (error: any) {
      console.error('Error fetching courses:', error);
      setError(error.response?.data?.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  // Load data on mount
  useEffect(() => {
    fetchProducts();
    fetchCourses();
  }, []);

  const addProduct = async (productData: Omit<Product, '_id'>) => {
    try {
      setError(null);
      const response = await productsAPI.create(productData);
      setProducts(prev => [...prev, response.data]);
    } catch (error: any) {
      console.error('Error adding product:', error);
      setError(error.response?.data?.message || 'Failed to add product');
      throw error;
    }
  };

  const updateProduct = async (id: string, productData: Omit<Product, '_id'>) => {
    try {
      setError(null);
      const response = await productsAPI.update(id, productData);
      setProducts(prev => prev.map(p => p._id === id ? response.data : p));
    } catch (error: any) {
      console.error('Error updating product:', error);
      setError(error.response?.data?.message || 'Failed to update product');
      throw error;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      setError(null);
      await productsAPI.delete(id);
      setProducts(prev => prev.filter(p => p._id !== id));
    } catch (error: any) {
      console.error('Error deleting product:', error);
      setError(error.response?.data?.message || 'Failed to delete product');
      throw error;
    }
  };

  const addCourse = async (courseData: Omit<Course, '_id'>) => {
    try {
      setError(null);
      const response = await coursesAPI.create(courseData);
      setCourses(prev => [...prev, response.data]);
    } catch (error: any) {
      console.error('Error adding course:', error);
      setError(error.response?.data?.message || 'Failed to add course');
      throw error;
    }
  };

  const updateCourse = async (id: string, courseData: Omit<Course, '_id'>) => {
    try {
      setError(null);
      const response = await coursesAPI.update(id, courseData);
      setCourses(prev => prev.map(c => c._id === id ? response.data : c));
    } catch (error: any) {
      console.error('Error updating course:', error);
      setError(error.response?.data?.message || 'Failed to update course');
      throw error;
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      setError(null);
      await coursesAPI.delete(id);
      setCourses(prev => prev.filter(c => c._id !== id));
    } catch (error: any) {
      console.error('Error deleting course:', error);
      setError(error.response?.data?.message || 'Failed to delete course');
      throw error;
    }
  };

  return (
    <ProductContext.Provider value={{
      products,
      courses,
      loading,
      error,
      addProduct,
      updateProduct,
      deleteProduct,
      addCourse,
      updateCourse,
      deleteCourse,
      fetchProducts,
      fetchCourses
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};