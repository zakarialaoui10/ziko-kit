function routesParser(route) {
    const segments = route.split('/');
    const params = [];
    let routeType = 'static';
    segments.forEach(segment => {
        if (segment === '[]') {
            routeType = 'wildcard';
        } else {
            const dynamicParts = segment.match(/\[([^\]]+)\]/g);
            if (dynamicParts) {
                if (routeType !== 'wildcard') {
                    routeType = 'dynamic';
                }
                dynamicParts.forEach(part => {
                    const paramName = part.slice(1, -1);
                    params.push(paramName);
                });
            }
        }
    });
    return {
        route: route,
        type: routeType,
        params: params.length > 0 ? params : null
    };
}
export {
    routesParser
}
// Example usage:
