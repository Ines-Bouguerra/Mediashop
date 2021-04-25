# -*- coding: utf-8 -*-
"""
Created on Thu Apr 22 12:49:27 2021

@author: user
"""


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import LabelEncoder


"""Importing the dataset
"""

dataset=pd.read_csv("outputTunisianet.csv")


"""Remplace categorical values with numeric values 0,1,2,...
"""

labelencoder=LabelEncoder()
for i in dataset:
    dataset[i]=labelencoder.fit_transform(dataset[i])

X=dataset.iloc[:,:].values
norm_data=MinMaxScaler()
X=norm_data.fit_transform(X)

nbrs=NearestNeighbors(n_neighbors=2,algorithm='ball_tree').fit(X)

distances,indices=nbrs.kneighbors(X)

distances=np.sort(distances,axis=0)

distances=distances[:,1]

plt.plot(distances)