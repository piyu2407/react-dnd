
import React, { useState, useEffect } from 'react';
import { Mention } from 'primereact/mention';
// import { CustomerService } from '../service/CustomerService';

export const MentionDemo = () => {

    const [customers, setCustomers] = useState([]);
    // const [suggestions, setSuggestions] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions] = useState([]);

    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    // const customerservice = new CustomerService();

    // useEffect(() => {
    //     customerservice.getCustomersSmall().then(data => {
    //         data.forEach(d => d['nickname'] = `${d.name.replace(/\s+/g, '').toLowerCase()}_${d.id}`);
    //         setCustomers(data);
    //     });
    // }, [])



    const onMultipleSearch = (event) => {
        const trigger = event.trigger;

        if (trigger === '@') {
            //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...customers];
                }
                else {
                    suggestions = customers.filter((customer) => {
                        return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
        else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...tagSuggestions];
                }
                else {
                    suggestions = tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
    }

    const itemTemplate = (suggestion) => {
        const src = 'images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{ verticalAlign: 'middle' }} />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-secondary-color)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    const multipleItemTemplate = (suggestion, options) => {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return itemTemplate(suggestion);
        }
        else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    }

    return (
        <div className="mycomp">
            <Mention trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch} field={['nickname']} placeholder="Please enter @ to mention people, # to mention tag"
                itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        </div>
    )
}
export default MentionDemo;