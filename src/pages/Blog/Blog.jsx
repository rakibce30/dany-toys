import React from 'react';
import TabTitle from '../../utility/title';

const Blog = () => {
    TabTitle("Dany | Blogs");
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='mb-6'>
                <h3 className='font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='pl-6'>Access Token: <br />
                    An access token is a credential that is used to access protected resources on behalf of a user. It is typically a string that contains information about the user's identity and the permissions they have.<br />

                    Refresh Token:<br />
                    A refresh token is a credential that is used to obtain a new access token without requiring the user to re-authenticate. It is long-lived and typically has a longer expiration time compared to access tokens.<br />
                    Access Token: The access token should be stored securely on the client-side to prevent unauthorized access. Commonly, it is stored in memory or a secure storage mechanism provided by the operating system or framework, such as Keychain for iOS or KeyStore for Android.<br />
                    Refresh Token: The refresh token is more sensitive than the access token since it has a longer lifespan and can be used to obtain new access tokens. It should be stored securely on the client-side, preferably in a secure storage mechanism specifically designed for sensitive data, such as the secure storage mentioned above. Additionally, it is important to protect the refresh token from cross-site scripting (XSS) attacks and other potential vulnerabilities.
                    By securely storing the tokens, you can help protect the user's authentication and authorization information and mitigate the risk of unauthorized access to protected resources.
                </p>
            </div>
            <div className='mb-6'>
                <h3 className='font-bold'>2. Compare SQL and NoSQL databases?</h3>
                <p className='pl-6'>Access Token: <br />
                    SQL: <br />
                    Stands for Structured Query Language<br />
                    Relational database management system (RDBMS)<br />
                    Suitable for structured data with predefined schema<br />
                    Data is stored in tables with columns and rows<br />
                    NoSQL<br />
                    Stands for Not Only SQL<br />
                    Non-relational database management system<br />
                    Suitable for unstructured and semi-structured data<br />
                    Data is stored in collections or documents<br />
                </p>
            </div>
            <div className='mb-6'>
                <h3 className='font-bold'>3. What is express js? What is Next JS (google it)?</h3>
                <p className='pl-6'>Access Token: <br />
                    Express: <br />
                    Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.<br />

                    Next JS<br />
                    Next.js is a front-end framework that makes it easy to build fast websites with React—which is a free and open-source front-end JavaScript library for building user interfaces based on UI components.<br />
                </p>
            </div>
            <div className='mb-6'>
                <h3 className='font-bold'>4. What is MongoDB aggregate and how does it work (google it)?</h3>
                <p className='pl-6'>Access Token: <br />
                    Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. In SQL count(*) and with group by is an equivalent of MongoDB aggregation.<br />

                    Pipeline Stages:
                    The aggregate pipeline consists of one or more stages, and each stage performs a specific operation on the input documents. Some commonly used stages include:

                    $match: Filters documents based on specified criteria.
                    $group: Groups documents together based on a specified key and performs aggregate operations on grouped data.
                    $project: Reshapes the documents, includes or excludes specific fields, or adds computed fields.
                    $sort: Sorts the documents based on specified criteria.
                    $limit and $skip: Controls the number of documents to return and the number of documents to skip.
                    $lookup: Performs a left outer join with another collection.<br />
                    Processing Order:
                    The stages in the aggregate pipeline are processed in the order they are defined. The output of each stage becomes the input for the next stage, allowing you to perform complex transformations and calculations on the data.<br />
                    Results:
                    The aggregate framework returns the result of the pipeline as a cursor, which can be iterated to retrieve the aggregated data. The output can include aggregated values, computed fields, grouped data, or any other transformations performed in the pipeline.
                </p>
            </div>
        </div>
    );
};

export default Blog;