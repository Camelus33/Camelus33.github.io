---
layout: post
title: "Python으로 시작하는 데이터 분석: 기초부터 실전까지"
date: 2023-12-10 10:15:00 +0900
categories: [Development, Python]
tags: [python, data-analysis, pandas, numpy, matplotlib]
image: /assets/images/posts/python.svg
author: alex_kim
featured: false
excerpt: Python을 활용한 데이터 분석의 기초부터 실전 활용법까지 알아봅니다. Pandas, NumPy, Matplotlib 등 주요 라이브러리 사용법과 실제 데이터셋을 분석하는 과정을 단계별로 설명합니다.
---

# Python으로 시작하는 데이터 분석: 기초부터 실전까지

데이터 분석은 현대 비즈니스와 연구 분야에서 필수적인 역량이 되었습니다. Python은 풍부한 라이브러리와 간결한 문법으로 데이터 분석 작업을 효율적으로 수행할 수 있게 해주는 강력한 도구입니다. 이 글에서는 Python을 활용한 데이터 분석의 기초부터 실전 활용법까지 알아보겠습니다.

## 데이터 분석을 위한 Python 환경 설정

데이터 분석을 시작하기 전에 필요한 라이브러리와 환경을 설정해야 합니다.

### 필수 라이브러리 설치

```bash
pip install numpy pandas matplotlib seaborn scikit-learn jupyter
```

### 주요 라이브러리 소개

- **NumPy**: 수치 계산을 위한 기본 라이브러리
- **Pandas**: 데이터 조작과 분석을 위한 라이브러리
- **Matplotlib**: 데이터 시각화를 위한 기본 라이브러리
- **Seaborn**: 통계 데이터 시각화를 위한 고급 라이브러리
- **Scikit-learn**: 머신러닝 알고리즘을 위한 라이브러리

## 데이터 불러오기와 기본 탐색

데이터 분석의 첫 단계는 데이터를 불러오고 기본적인 특성을 파악하는 것입니다.

### CSV 파일 불러오기

```python
import pandas as pd

# CSV 파일 불러오기
df = pd.read_csv('data.csv')

# 데이터 미리보기
print(df.head())

# 데이터 기본 정보 확인
print(df.info())

# 기술 통계량 확인
print(df.describe())
```

### 결측치 확인 및 처리

```python
# 결측치 확인
print(df.isnull().sum())

# 결측치 처리 - 평균값으로 대체
df['column_name'].fillna(df['column_name'].mean(), inplace=True)

# 결측치 처리 - 행 삭제
df.dropna(inplace=True)
```

## 데이터 전처리와 변환

데이터 분석에서 가장 많은 시간이 소요되는 단계는 데이터 전처리입니다.

### 데이터 타입 변환

```python
# 날짜 형식으로 변환
df['date_column'] = pd.to_datetime(df['date_column'])

# 범주형 데이터로 변환
df['category_column'] = df['category_column'].astype('category')
```

### 데이터 필터링과 정렬

```python
# 조건에 따른 필터링
filtered_df = df[df['value'] > 100]

# 다중 조건 필터링
complex_filter = df[(df['value'] > 100) & (df['category'] == 'A')]

# 데이터 정렬
sorted_df = df.sort_values(by='value', ascending=False)
```

### 새로운 특성 생성

```python
# 기존 열을 기반으로 새로운 열 생성
df['ratio'] = df['value_1'] / df['value_2']

# 날짜 데이터에서 연도, 월, 일 추출
df['year'] = df['date_column'].dt.year
df['month'] = df['date_column'].dt.month
df['day'] = df['date_column'].dt.day
```

## 데이터 집계와 그룹화

데이터 분석에서 중요한 부분은 데이터를 그룹화하고 집계하여 패턴을 발견하는 것입니다.

### 기본 그룹화와 집계

```python
# 범주별 평균 계산
group_means = df.groupby('category')['value'].mean()

# 다중 열 기준 그룹화
multi_group = df.groupby(['category', 'sub_category']).agg({
    'value_1': 'mean',
    'value_2': 'sum',
    'value_3': ['min', 'max', 'count']
})
```

### 피벗 테이블 생성

```python
# 피벗 테이블 생성
pivot_table = pd.pivot_table(
    df,
    values='value',
    index='category',
    columns='sub_category',
    aggfunc='mean',
    fill_value=0
)
```

## 데이터 시각화

데이터 시각화는 데이터의 패턴과 관계를 직관적으로 이해하는 데 도움이 됩니다.

### Matplotlib을 이용한 기본 시각화

```python
import matplotlib.pyplot as plt

# 선 그래프
plt.figure(figsize=(10, 6))
plt.plot(df['x'], df['y'], marker='o', linestyle='-')
plt.title('Line Plot')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.grid(True)
plt.show()

# 막대 그래프
plt.figure(figsize=(10, 6))
plt.bar(df['category'], df['value'])
plt.title('Bar Plot')
plt.xlabel('Category')
plt.ylabel('Value')
plt.xticks(rotation=45)
plt.show()
```

### Seaborn을 이용한 고급 시각화

```python
import seaborn as sns

# 히트맵 (상관관계 시각화)
plt.figure(figsize=(10, 8))
correlation = df.corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm', linewidths=0.5)
plt.title('Correlation Heatmap')
plt.show()

# 산점도 행렬
sns.pairplot(df[['value_1', 'value_2', 'value_3', 'value_4']], height=2.5)
plt.suptitle('Scatter Plot Matrix', y=1.02)
plt.show()
```

## 실전 데이터 분석 예제: 판매 데이터 분석

이제 실제 데이터셋을 사용하여 분석 과정을 살펴보겠습니다.

### 데이터 불러오기 및 탐색

```python
# 판매 데이터 불러오기
sales_df = pd.read_csv('sales_data.csv')

# 데이터 기본 정보 확인
print(sales_df.info())
print(sales_df.head())

# 결측치 확인
print(sales_df.isnull().sum())
```

### 데이터 전처리

```python
# 날짜 열 변환
sales_df['order_date'] = pd.to_datetime(sales_df['order_date'])

# 연도와 월 추출
sales_df['year'] = sales_df['order_date'].dt.year
sales_df['month'] = sales_df['order_date'].dt.month

# 총 판매액 계산
sales_df['total_sales'] = sales_df['quantity'] * sales_df['unit_price']
```

### 데이터 분석

```python
# 월별 판매액 추이
monthly_sales = sales_df.groupby(['year', 'month'])['total_sales'].sum().reset_index()

# 제품 카테고리별 판매액
category_sales = sales_df.groupby('product_category')['total_sales'].sum().sort_values(ascending=False)

# 지역별 판매액
region_sales = sales_df.groupby('region')['total_sales'].sum().sort_values(ascending=False)
```

### 데이터 시각화

```python
# 월별 판매액 추이 시각화
plt.figure(figsize=(12, 6))
sns.lineplot(data=monthly_sales, x='month', y='total_sales', hue='year', marker='o')
plt.title('Monthly Sales Trend')
plt.xlabel('Month')
plt.ylabel('Total Sales')
plt.grid(True)
plt.show()

# 제품 카테고리별 판매액 시각화
plt.figure(figsize=(10, 6))
category_sales.plot(kind='bar', color='skyblue')
plt.title('Sales by Product Category')
plt.xlabel('Product Category')
plt.ylabel('Total Sales')
plt.xticks(rotation=45)
plt.grid(axis='y')
plt.show()

# 지역별 판매액 시각화
plt.figure(figsize=(10, 6))
region_sales.plot(kind='pie', autopct='%1.1f%%', startangle=90, figsize=(10, 6))
plt.title('Sales by Region')
plt.ylabel('')
plt.show()
```

## 결론

Python을 활용한 데이터 분석은 비즈니스 인사이트를 도출하고 의사결정을 지원하는 강력한 도구입니다. 이 글에서 소개한 기본적인 데이터 분석 과정과 기법을 바탕으로, 실제 데이터셋에 적용하여 의미 있는 결과를 얻을 수 있습니다.

데이터 분석은 단순히 기술적인 작업이 아니라 비즈니스 문제를 해결하기 위한 과정임을 기억하세요. 분석의 목적을 명확히 하고, 적절한 방법론을 선택하여 데이터에서 가치 있는 인사이트를 발견하는 것이 중요합니다.

여러분은 어떤 데이터 분석 프로젝트를 진행하고 계신가요? 댓글로 여러분의 경험과 질문을 공유해 주세요! 