export default class Paginator {

    static paginate(items, pageNo, per_page) {

        let page = pageNo || 1,
            items_per_page = per_page || 10,
            offset = (page - 1) * items_per_page,

            paginatedItems = items.slice(offset).slice(0, items_per_page),
            total_pages = Math.ceil(items.length / items_per_page);

        return {
            page: page,
            per_page: items_per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }
}