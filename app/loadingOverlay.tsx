import React from 'react';
import { View } from '../components/Themed';

const LoadingOverlay = () => {
    return (
        <View className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <View className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></View>
        </View>
    );
};

export default LoadingOverlay;
