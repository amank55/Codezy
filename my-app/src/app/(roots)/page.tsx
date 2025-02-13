import EditorPanel from "./_components/editorpanel"
import Header from "./_components/header"
import OutputPanel from "./_components/outputpanel"

export default function Home(){

    return(
      <div className="min-h-screen">
        <div className="max-w-[1800px] mx-auto p-4">
            <Header/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <OutputPanel/>
            <EditorPanel/>
        </div>
        </div>
      </div>
    )
   }