function validateRequest(request){
    const properties = ['Method', 'URI', 'Version', 'Message'];
    for (const property of properties) {
        if(!request.hasOwnProperty(property.toLowerCase())){
            throw new Error(`Invalid request header: Invalid ${property}`);
        }
    }
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  
    const uriPattern = /^[a-zA-Z0-9\.]+$/g;
    const msgPattern = /^[^<>\\\&\'\"]+$/g;

    if(!validMethods.includes(request.method)){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(request.uri !== '*' && !request.uri.match(uriPattern)){
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!validVersions.includes(request.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(request.message !== '' && !request.message.match(msgPattern)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return request;
}